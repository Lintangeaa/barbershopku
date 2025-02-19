import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import RedirectButton from "@/Components/RedirectButton";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("cutters.store"));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Cutter" />
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Tambah Cutter
                </h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 space-y-6">
                    <div className="flex justify-start">
                      <RedirectButton className="bg-brown" href={route('cutters.index')}>Kembali</RedirectButton>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nama Cutter</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border rounded-md"
                        />
                        {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gambar</label>
                        <input
                            type="file"
                            onChange={(e) => setData("image", e.target.files[0])}
                            className="mt-1 block w-full px-4 py-2 border rounded-md"
                        />
                        {errors.image && <div className="text-red-600 text-sm mt-1">{errors.image}</div>}
                    </div>

                    <div className="flex justify-end">    
                        <PrimaryButton className="bg-brown" type="submit" disabled={processing}>
                            {processing ? "Memproses..." : "Tambah Cutter"}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
