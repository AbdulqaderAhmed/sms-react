import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  getAllParent,
} from "../../../../feature/admin/AdminActions/AdminParentSlice";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Table } from "flowbite-react";

export default function AdminParent() {
  const { user } = useSelector((state) => state.adminAuth);
  const { token } = user;
  const { data, isLoading, isError, message } = useSelector(
    (state) => state.adminParent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isError) {
      dispatch(getAllParent(token));
      dispatch(clear);
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [dispatch, isError, message, token]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <PropagateLoader size={25} loading={isLoading} color="#6C3129" />
      </div>
    );
  }

  return (
    <div className="bg-slate-200 w-5/6 h-5/6 p-5 shadow-xl rounded-2xl">
      <h1 className="text-center text-2xl mb-5 font-semibold">Parent list</h1>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>First name</Table.HeadCell>
          <Table.HeadCell>Middle name</Table.HeadCell>
          <Table.HeadCell>Last name</Table.HeadCell>
          <Table.HeadCell>User name</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Date of birth</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data &&
            data.map((item, index) => {
              return (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell>{item.firstName}</Table.Cell>
                  <Table.Cell>{item.middleName}</Table.Cell>
                  <Table.Cell>{item.lastName}</Table.Cell>
                  <Table.Cell>{item.username}</Table.Cell>
                  <Table.Cell>{item.phone}</Table.Cell>
                  <Table.Cell>{item.DOB}</Table.Cell>
                  <Table.Cell>
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      href="/tables"
                    >
                      <p>Edit</p>
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
}
