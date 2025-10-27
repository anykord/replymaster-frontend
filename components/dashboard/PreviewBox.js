export default function PreviewBox() {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold mb-2">Предпросмотр ответа</h4>
      <div className="text-sm text-gray-600">Пример: как система ответит на типичный вопрос. (Мок)</div>
      <div className="mt-2 rounded bg-gray-50 p-3 text-sm">Ответ: З depends on prompt settings…</div>
    </div>
  );
}
