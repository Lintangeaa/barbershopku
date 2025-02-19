import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import RedirectButton from "@/Components/RedirectButton";

const CutterIndex = ({ cutters: initialCutters }) => {
    const [cutters, setCutters] = useState(initialCutters);
    const { delete: destroy } = useForm();

    const deleteCutter = (cutterId) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Cutter ini akan dihapus secara permanen.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("cutters.destroy", cutterId), {
                    onSuccess: () => {
                        Swal.fire("Berhasil!", "Cutter berhasil dihapus!", "success");
                        setCutters((prev) => prev.filter((c) => c.id !== cutterId));
                    },
                    onError: () => {
                        Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus cutter.", "error");
                    },
                });
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Daftar Cutter" />

            <div className="px-8 py-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Daftar Cutter
                </h1>

                <div className="flex justify-end mb-4">
                    <RedirectButton className="bg-brown" href={route("cutters.create")}>Tambah Cutter</RedirectButton>
                </div>

                <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-3 text-left border">Nama</th>
                                <th className="p-3 text-left border">Gambar</th>
                                <th className="p-3 text-center border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cutters.map((cutter) => (
                                <tr key={cutter.id} className="border">
                                    <td className="p-3">{cutter.name}</td>
                                    <td className="p-3">
                                        {cutter.image && (
                                            <img src={`/storage/${cutter.image}`} alt={cutter.name} className="h-12" />
                                        )}
                                    </td>
                                    <td className="p-3 text-center">
                                        <div className="flex justify-center items-center space-x-2">
                                            <Link href={route("cutters.edit", cutter.id)} className="text-yellow-500 hover:text-yellow-700">
                                                <RiEdit2Line size={20} />
                                            </Link>
                                            <RiDeleteBin2Line
                                                className="text-red-500 hover:text-red-700 cursor-pointer"
                                                size={20}
                                                onClick={() => deleteCutter(cutter.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CutterIndex;
