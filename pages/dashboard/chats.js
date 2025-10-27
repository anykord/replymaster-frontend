import DashboardLayout from '../../components/dashboard/Layout';
import MessageList from '../../components/dashboard/MessageList';
import SuggestionPanel from '../../components/dashboard/SuggestionPanel';

const mockMessages = [
  { id:'m1', author:'user123', text:'Как выучить корейский алфавит?', relevanceScore:0.92 },
  { id:'m2', author:'hangeul', text:'Сколько длится ваш курс?', relevanceScore:0.84 },
];

export default function ChatsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Чаты и ответы</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <MessageList items={mockMessages} />
        <SuggestionPanel suggestion={{ text: 'Здравствуйте! Начать лучше с алфавита Хангыль. Могу прислать бесплатный PDF и расписание занятий.' }} />
      </div>
    </DashboardLayout>
  );
}
