import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";

const EditCutter = ({ cutter }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: cutter.name,
        image: null,
    });

    const [previewImage, setPreviewImage] = useState(cutter.image ? `/storage/${cutter.image}` : null);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("cutters.update", cutter.id), {
            preserveScroll: true,
            onSuccess: () => {
              Swal.fire("Berhasil!", "Cutter berhasil diupdate!", "success"); 
            },
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Cutter" />
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Cutter</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Nama Cutter</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Gambar Cutter</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="mt-2 h-32 w-32 object-cover rounded-lg border"
                            />
                        )}
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <div className="flex justify-end space-x-2">
                        <PrimaryButton className="bg-brown" type="submit" disabled={processing}>
                            {processing ? "Menyimpan..." : "Simpan Perubahan"}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditCutter;
