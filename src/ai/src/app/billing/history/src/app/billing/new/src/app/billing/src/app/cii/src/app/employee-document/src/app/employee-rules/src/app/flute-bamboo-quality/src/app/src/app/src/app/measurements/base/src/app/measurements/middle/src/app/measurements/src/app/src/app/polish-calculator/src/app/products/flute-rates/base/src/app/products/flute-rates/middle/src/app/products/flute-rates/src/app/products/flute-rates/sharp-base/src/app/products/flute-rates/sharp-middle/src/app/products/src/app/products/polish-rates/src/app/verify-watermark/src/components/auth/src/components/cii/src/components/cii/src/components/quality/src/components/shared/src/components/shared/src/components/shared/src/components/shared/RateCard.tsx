import { Card, CardContent } from "@/components/ui/card";

interface RateCardProps {
    label: string;
    value: string | number;
}

export default function RateCard({ label, value }: RateCardProps) {
    return (
        <Card className="bg-secondary/50">
            <CardContent className="flex items-center justify-between p-4">
                <span className="text-foreground/80">{label}</span>
                <span className="font-bold text-primary">{value}</span>
            </CardContent>
        </Card>
    );
}

