import { Faq as TFaq } from "../api/faq/Faq";

export const FAQ_TITLE_FIELD = "question";

export const FaqTitle = (record: TFaq): string => {
  return record.question?.toString() || String(record.id);
};
