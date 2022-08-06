import { useState, useEffect } from "react";
import { useGetUsersQuery } from "./services/users";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelopeOpen, FaLock, FaStreetView } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

function App() {
    const [value, setValue] = useState("random user");
    const [user, setUser] = useState({});
    const [title, setTitle] = useState("name");

    const { data, isLoading, refetch } = useGetUsersQuery();

    useEffect(() => {
        if (data) {
            const {
                name: { first, last },
                location: {
                    street: { number, name },
                },
                login: { password },
                dob: { age },
                phone,
                email,
                picture: { large: image },
            } = data.results[0];

            const newUser = {
                name: `${first} ${last}`,
                street: `${number} ${name}`,
                image,
                phone,
                email,
                password,
                age,
            };

            setUser(newUser);
            setTitle("name");
            setValue(newUser.name);
        }
    }, [data]);

    // if (!user) return <p className="text-center text-3xl">Loading...</p>;

    return (
        <div className="">
            <div className="h-[45vh] bg-first relative ">
                <div className=" pb-3 absolute bottom-0 left-1/2 bg-white rounded overflow-hidden -translate-x-1/2 translate-y-2/4">
                    <div className="relative w-full bg-second h-24">
                        <div className="overflow-hidden absolute bottom-0 left-1/2 w-28 h-28 rounded-full bg-blue-500 -translate-x-1/2 translate-y-1/3">
                            <img src={user.image} alt="profile" />
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col items-center gap-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-400 font-bold">
                                {title}
                            </p>
                            <p className="font-semibold text-xl">{value}</p>
                        </div>
                        <div className="flex w-full justify-around">
                            <BsFillPersonFill
                                size={24}
                                className="text-gray-600 mx-3 md:mx-5 hover:text-blue-600 ease-in-out duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    setTitle("name");
                                    setValue(user.name);
                                }}
                            />
                            <FaEnvelopeOpen
                                size={24}
                                className="text-gray-600 mx-3 md:mx-5 hover:text-blue-600 ease-in-out duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    setTitle("email");
                                    setValue(user.email);
                                }}
                            />
                            <MdOutlineDateRange
                                size={24}
                                className="text-gray-600 mx-3 md:mx-5 hover:text-blue-600 ease-in-out duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    setTitle("age");
                                    setValue(user.age);
                                }}
                            />
                            <FaStreetView
                                size={24}
                                className="text-gray-600 mx-3 md:mx-5 hover:text-blue-600 ease-in-out duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    setTitle("street");
                                    setValue(user.street);
                                }}
                            />
                            <BsFillTelephoneFill
                                size={24}
                                className="text-gray-600 mx-3 md:mx-5 hover:text-blue-600 ease-in-out duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    setTitle("phone");
                                    setValue(user.phone);
                                }}
                            />
                            <FaLock
                                size={24}
                                className="text-gray-600 mx-3 md:mx-5 hover:text-blue-600 ease-in-out duration-300 cursor-pointer"
                                onMouseEnter={() => {
                                    setTitle("password");
                                    setValue(user.password);
                                }}
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => refetch()}
                                className="bg-blue-400 py-1 px-2 rounded font-semibold hover:bg-gray-100 hover:text-blue-400 ease-in-out duration-500"
                            >
                                {isLoading ? "Loading..." : "Random User"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[55vh] bg-second"></div>
        </div>
    );
}

export default App;
