import { DiscountFormData } from '../../utils/email';

/**
 * Szablon emaila o zapisie na powiadomienie o starcie dla administratora
 */
export function getDiscountEmailTemplate(data: DiscountFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0A2463;">Nowy zapis na powiadomienie o starcie</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Imię:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p style="margin-top: 15px; color: #4CAF50; font-weight: bold;">
          Użytkownik chce być powiadomiony o uruchomieniu aplikacji e-Porozumienie.
        </p>
      </div>
      <p style="color: #616161; font-size: 12px; margin-top: 20px;">
        Wiadomość wysłana z systemu e-Porozumienie
      </p>
    </div>
  `;
}

