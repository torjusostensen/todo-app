import styles from '../Tasks.module.css'

async function getTask(taskId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/tasks/records/${taskId}`,
        {
            next: { revalidate: 10},
        }
    );
    const data = await res.json();
    return data;
}

export default async function TaskPage({ params }: any) {
    const task = await getTask(params.id);

    return (
        <div>
            <h1>tasks/{task.id}</h1>
            <div className={styles.task}>
                <h3>{task.title}</h3>
                <h5>{task.content}</h5>
                <p>{task.created}</p>
            </div>
        </div>
    );
}