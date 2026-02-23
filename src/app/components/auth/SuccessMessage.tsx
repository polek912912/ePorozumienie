import { SuccessMessageProps } from '@/lib/types';

export default function SuccessMessage({ message }: SuccessMessageProps) {
    if (!message) return null;

    return (
        <div className="success-message">
            {message}
        </div>
    );
}