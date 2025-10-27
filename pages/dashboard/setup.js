import DashboardLayout from '../../components/dashboard/Layout';
import PromptEditor from '../../components/dashboard/PromptEditor';
import FilesUploader from '../../components/dashboard/FilesUploader';
import PreviewBox from '../../components/dashboard/PreviewBox';

export default function SetupPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">AI Сетап</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <PromptEditor initial={'Я Лера, преподаватель корейского языка...'} />
        <FilesUploader />
      </div>
      <div className="mt-4">
        <PreviewBox />
      </div>
    </DashboardLayout>
  );
}
