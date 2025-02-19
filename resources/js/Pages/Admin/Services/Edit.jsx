import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { RiArrowLeftLine } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Edit({ service }) {
    const { data, setData, put, processing, errors } = useForm({
        name: service.name,
        price: service.price,
        description: service.description || "",
        image: null
    });

    console.log('DATA', data)

    const [previewImage, setPreviewImage] = useState(service.image ? `/storage/${service.image}` : null);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("services.update", service.id), {
          preserveScroll: true,
          onSuccess: () => {
            Swal.fire("Berhasil!", "Layanan berhasil diupdate!", "success"); 
          },
        })
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
            <Head title="Edit Layanan" />

            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
                {/* Tombol kembali */}
                <Link href={route("services.index")} className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
                    <RiArrowLeftLine size={20} className="mr-2" /> Kembali
                </Link>

                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Edit Layanan</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 w-full px-4 py-2 border rounded-md"
                        />
                        {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Harga</label>
                        <input
                            type="number"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                            className="mt-1 w-full px-4 py-2 border rounded-md"
                        />
                        {errors.price && <div className="text-red-600 text-sm mt-1">{errors.price}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="mt-1 w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Gambar Layanan</label>
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

                    <div className="flex justify-end">
                        <PrimaryButton className="bg-brown" type="submit" disabled={processing}>
                            {processing ? "Memproses..." : "Simpan Perubahan"}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
