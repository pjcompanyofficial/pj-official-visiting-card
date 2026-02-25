import { db } from "@/lib/firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

// Save OTP to the database with a server-side timestamp
export const saveOTPToFirestore = async (email: string, otp: string) => {
    // By removing the try/catch, the original Firebase error will propagate
    // to the calling function, which has more UI context for better error display.
    await setDoc(doc(db, "otps", email), {
        otp: otp,
        createdAt: serverTimestamp(),
    });
};

// Verify OTP from the database
export const verifyOTPFromFirestore = async (email: string, enteredOtp: string) => {
    const docRef = doc(db, "otps", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        
        // Check if OTP is expired (5 minutes)
        if (data.createdAt) {
            const now = new Date();
            const otpTime = data.createdAt.toDate();
            const diffInMinutes = (now.getTime() - otpTime.getTime()) / 60000;
            
            if (diffInMinutes > 5) {
                console.log("OTP has expired.");
                return false;
            }
        }
        
        return data.otp === enteredOtp;
    }
    return false;
};
