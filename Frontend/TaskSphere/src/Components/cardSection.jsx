import { TodoCard } from "./todoCard"

const todos = [
    {
        date: "22-11-2000",
        title: "Title 1",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 2",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 3",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 4",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 5",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 6",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 7",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 8",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 9",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 10",
        time: "00.00 Am - 00.00 PM"
    },
]

const inProgressTodos = [
    {
        date: "22-11-2000",
        title: "Title 1",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 2",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 3",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 4",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 5",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 6",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 7",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 8",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 9",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 10",
        time: "00.00 Am - 00.00 PM"
    },
]

const completedTodos = [
    {
        date: "22-11-2000",
        title: "Title 1",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 2",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 3",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 4",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 5",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 6",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 7",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 8",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 9",
        time: "00.00 Am - 00.00 PM"
    },
    {
        date: "22-11-2000",
        title: "Title 10",
        time: "00.00 Am - 00.00 PM"
    },
]



export function CardSections() {

    return (
        <div >
            <div className="bg-slate-300 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
                <div className=" p-0.5">
                    <div className="text-center font-semibold text-2xl p-1 border-1 border-s border-black">Todos</div>
                    <div className="bg-slate-200">
                        {todos.map((todo) => (
                            <TodoCard
                                key={todo.key}
                                date={todo.date}
                                title={todo.title}
                                time={todo.time}
                            />
                        ))}

                    </div>
                </div>

                <div className=" p-0.5">
                    <div className="text-center font-semibold text-2xl p-1 border-1 border-s border-black">In progress</div>
                    <div className="bg-slate-200">
                        {inProgressTodos.map((todo) => (
                            <TodoCard
                                key={inProgressTodos.key}
                                date={todo.date}
                                title={todo.title}
                                time={todo.time}
                            />
                        ))}

                    </div>
                </div>

                <div className=" p-0.5">
                    <div className="text-center font-semibold text-2xl p-1 border-1 border-s border-black">Completed</div>
                    <div className="bg-slate-200">
                        {completedTodos.map((todo) => (
                            <TodoCard
                                key={completedTodos.key}
                                date={todo.date}
                                title={todo.title}
                                time={todo.time}
                            />
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}

