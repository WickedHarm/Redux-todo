import React from "react";

export function Statistic(props) {
    let total = props.data.length;
    let done = props.data.filter( item => item.completed).length;
    return (
        <table>
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Выполнено:</th>
                    <td>{done}</td>
                </tr>
                <tr>
                    <th>Осталось:</th>
                    <td>{total - done}</td>
                </tr>
            </tbody>
        </table>
    )
}