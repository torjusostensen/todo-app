import Link from 'next/link';
import styles from './Todos.module.css';
import CreateTodo from './CreateTodo';

async function getTodos() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/todos/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default async function TodosPage() {
    const todos = await getTodos();

    return(
        <div>
            <h1 className='first_title'>Todos</h1>
            <div className={styles.grid}>
                {todos?.map((todo) => {
                    return <Todo key={todo.id} todo={todo} />;
                })}
            </div>

            <CreateTodo />
        </div>
    );
}

function Todo ({ todo }: any) {
    const { id, name, description, created } = todo || {};

    return (
        <Link href={`/todos/${id}`}>
            <div className={styles.todo}>
                <h2>{name}</h2>
                <h5>{description}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}