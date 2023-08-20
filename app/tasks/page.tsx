import Link from 'next/link';
import styles from './Tasks.module.css';
import CreateTask from './CreateTask';

export async function getTasks() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

export default async function TasksPage() {
  const tasks = await getTasks();

  return(
    <div>
      <h1 className='first_title'>Tasks</h1>
      <div className={styles.grid}>
        {tasks?.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>

      <CreateTask />
    </div>
  );
}

function Task({ task }: any) {
  const { id, title, content, created } = task || {};

  return (
    <Link href={`/tasks/${id}`}>
      <div className={styles.task}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}