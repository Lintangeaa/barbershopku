import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import Slider from "@/Components/Home/Slider";
import About from "@/Components/Home/About";
import OurService from "@/Components/Home/Service";
import OurBarbers from "@/Components/Home/Barbers";
import Footer from "@/Components/Home/Footer";

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Barbershop" />
            <Slider />
            <About />
            <div className="bg-white h-2 shadow-2xl"></div>
            <OurService />
            <OurBarbers />
            <Footer />
        </GuestLayout>
    );
}
