import { verifyDocument } from '@/ai/flows/verify-document-flow';
import { type Employee } from '@/hooks/use-employees';

export interface VerificationOutput {
  verificationStatus: 'Approved' | 'Fake' | 'Blank';
  analysisDetails: string;
}

// This function now calls the AI flow and then checks the results
// against the provided employee list.
export async function performVerification(imageUri: string, employees: Employee[]): Promise<VerificationOutput> {
  if (!imageUri || imageUri.length < 2000) {
    return {
      verificationStatus: 'Blank',
      analysisDetails: 'The uploaded image is not a valid document. Please try again with a clear image.',
    };
  }

  try {
    // Step 1: Call the AI to extract text from the image.
    const aiResult = await verifyDocument({ documentImageUri: imageUri });

    if (!aiResult.isDocumentLegible || !aiResult.employeeName || !aiResult.refNumber) {
        return {
            verificationStatus: 'Blank',
            analysisDetails: 'The document is blank or unreadable. Please fill in the details first.',
        };
    }

    // Step 2: Find the employee in our records based on the reference number.
    const foundEmployee = employees.find(emp => emp.refNumber.trim().toLowerCase() === aiResult.refNumber.trim().toLowerCase());

    if (!foundEmployee) {
        return {
            verificationStatus: 'Fake',
            analysisDetails: `No employee found with reference number: ${aiResult.refNumber}. This document is unauthorized.`,
        };
    }

    // Step 3: Check if the name from the document matches the name in our records.
    // We use a simple .includes() check to be flexible with minor variations.
    const nameMatch = foundEmployee.name.trim().toLowerCase().includes(aiResult.employeeName.trim().toLowerCase());

    if (nameMatch) {
        return {
            verificationStatus: 'Approved',
            analysisDetails: `Document approved for ${foundEmployee.name}.`,
        };
    } else {
        return {
            verificationStatus: 'Fake',
            analysisDetails: `Details mismatch. Document shows name "${aiResult.employeeName}" but records for ${aiResult.refNumber} belong to "${foundEmployee.name}".`,
        };
    }

  } catch (e: any) {
    console.error("Verification failed:", e);
    // This will catch errors from the AI model itself, like API issues.
    return {
      verificationStatus: 'Fake',
      analysisDetails: `Verification failed. The AI service may be temporarily unavailable. Error: ${e.message}`,
    };
  }
}
