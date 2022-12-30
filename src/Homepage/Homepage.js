import { Button } from "antd";
import { useEffect, useState } from "react";
import { getAllData } from "../axiosAPIs";

export const Homepage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [dataPosts, setDataPosts] = useState([]);

    const getData = async () => {
        const dataUser = await getAllData("users");
        const dataPosts = await getAllData("photos");

        setDataPosts(dataPosts);
        setDataUsers(dataUser);
    };

    useEffect(() => {
        getData();
    }, []);

    const dataPostSlice = dataPosts.slice(0, 10);

    const posts = dataPostSlice.map((item) => {
        const resp1Item = dataUsers.find((r) => r.id === item.id);

        return { ...item, ...resp1Item };
    });

    const [arrLiked, setArrLiked] = useState([]);

    const handleLiked = (id) => {
        const index = arrLiked.findIndex((item) => item.id === id);
        if (index === -1) {
            setArrLiked((arrLike) => [...arrLike, { id: id, isLike: true }]);
        } else {
            setArrLiked((arrLike) => [
                ...arrLike.slice(0, index),
                ...arrLike.slice(index + 1),
            ]);
        }
    };

    return (
        <>
            {posts.map((item) => (
                <div className="post_wrap" key={item.id}>
                    <div className="post_item">
                        <div>User: {item.name}</div>
                        <div>Content: {item.title}</div>
                        <div>Img: </div>
                        <img
                            src={item.url}
                            alt="new"
                            style={{ width: "50%" }}
                        />
                        <div>
                            <Button
                                type="primary"
                                onClick={() => handleLiked(item.id)}
                            >
                                {arrLiked.map((i) => i.id).includes(item.id)
                                    ? "Liked"
                                    : "Like"}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
