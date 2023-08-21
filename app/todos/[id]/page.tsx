import styles from '../Todos.module.css'

async function getTodo (todoId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/todos/records/${todoId}`,
        {
            next: { revalidate: 10},
        }
    );
    const data = await res.json();
    return data;
}

export default async function TodoPage({ params }: any) {
    const todo = await getTodo (params.id);

    return (
        <div>
            <h1>todos/{todo.id}</h1>
            <div className={styles.todo}>
                <h3>{todo.name}</h3>
                <h5>{todo.description}</h5>
                <p>{todo.created}</p>
            </div>
        </div>
    );
}