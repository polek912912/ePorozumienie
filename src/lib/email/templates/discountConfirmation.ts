/**
 * Szablon emaila potwierdzającego zapis na powiadomienie o starcie dla użytkownika
 */
export function getDiscountConfirmationEmailTemplate(userName: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0A2463;">Dziękujemy za zapis!</h2>
      <p>Witaj ${userName},</p>
      <p>Dziękujemy za zainteresowanie. Damy Ci znać, gdy e-Porozumienie będzie w pełni ukończone i gotowe do użycia.</p>
      <p style="margin-top: 30px; color: #616161; font-size: 14px;">
        Pozdrawiamy,<br>
        Zespół e-Porozumienie
      </p>
    </div>
  `;
}
