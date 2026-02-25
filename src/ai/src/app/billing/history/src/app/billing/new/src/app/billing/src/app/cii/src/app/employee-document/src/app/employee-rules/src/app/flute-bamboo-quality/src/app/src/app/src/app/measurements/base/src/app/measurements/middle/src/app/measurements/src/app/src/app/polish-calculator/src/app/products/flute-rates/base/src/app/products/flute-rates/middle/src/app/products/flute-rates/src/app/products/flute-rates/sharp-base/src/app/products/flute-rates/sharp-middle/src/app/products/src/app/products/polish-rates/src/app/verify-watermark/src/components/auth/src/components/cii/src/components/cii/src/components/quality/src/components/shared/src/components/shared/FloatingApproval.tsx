"use client"

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

// Get the specific images needed for the animation
const approvalImg1 = PlaceHolderImages.find(img => img.id === 'approval-1');
const approvalImg2 = PlaceHolderImages.find(img => img.id === 'approval-2');
const approvalImg5 = PlaceHolderImages.find(img => img.id === 'approval-5');

export default function FloatingApproval() {
    return (
        <>
            <style jsx>{`
                .float-box {
                    position: fixed;
                    bottom: 40px;
                    right: 20px;
                    width: 100px;
                    height: 120px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    z-index: 1000;
                    pointer-events: none;
                }

                .float-box .circle {
                    position: absolute;
                    top: 0;
                    width: 65px;
                    height: 65px;
                    border-radius: 50%; 
                    border: 2px solid hsl(var(--primary));
                    overflow: hidden;
                    background: #000;
                    opacity: 0;
                    animation: slide 12s infinite;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .float-box .circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                }

                .float-box .circle:nth-child(1) { animation-delay: 0s; }
                .float-box .circle:nth-child(2) { animation-delay: 4s; }
                .float-box .circle:nth-child(3) { animation-delay: 8s; }

                @keyframes slide {
                    0% { right: -120px; opacity: 0; transform: scale(0.6); } 
                    5% { right: 18px; opacity: 1; transform: scale(1); }      
                    15% { right: 18px; opacity: 1; transform: scale(1); }      
                    20% { right: -120px; opacity: 0; transform: scale(0.6); }
                    100% { right: -120px; opacity: 0; }
                }

                .approval-text {
                    position: absolute;
                    bottom: 10px;
                    width: 100%;
                    font-size: 8px;
                    color: hsl(var(--muted-foreground));
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    font-weight: 600;
                }
            `}</style>
            
            <div className="float-box">
                {approvalImg1 && (
                    <div className="circle">
                        <Image src={approvalImg1.imageUrl} alt="Sign" width={65} height={65} />
                    </div>
                )}
                {approvalImg2 && (
                    <div className="circle">
                        <Image src={approvalImg2.imageUrl} alt="Logo" width={65} height={65} />
                    </div>
                )}
                {approvalImg5 && (
                    <div className="circle">
                        <Image src={approvalImg5.imageUrl} alt="Seal" width={65} height={65} />
                    </div>
                )}
                <div className="approval-text">Approved By Management</div>
            </div>
        </>
    );
}
