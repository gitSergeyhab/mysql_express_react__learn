import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Pagination } from "react-bootstrap"
import { Context } from "../..";

export const Pages = observer (() => {

    const { device } = useContext(Context);

    const pageCount = Math.ceil(device.totalCount / device.limit);
    const pages = new Array(pageCount).fill(null).map((_, i) => ({ number: i + 1, active: i + 1 === device.page }))


    const pageItems = pages.map(({ number, active }) => 
        <Pagination.Item 
            key={number} 
            active={active}
            onClick={() => device.setPage(number)}
        >
            {number}
        </Pagination.Item>
        )
    return (
        <Pagination>
            {/* <Pagination.First />
            <Pagination.Prev /> */}

            {pageItems}
{/* 
            <Pagination.Next />
            <Pagination.Last /> */}
        </Pagination>
    )
})