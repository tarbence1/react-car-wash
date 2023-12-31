import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { PiPhoneDisconnectBold } from "react-icons/pi"
import { ContactFormIcons } from "./Icons/ContactFormIcons";
import { FormEvent, useState } from "react";

export const ContactSection = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const myForm = event.target as HTMLFormElement;
        const formData = new FormData(myForm);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                // @ts-ignore
                body: new URLSearchParams(formData).toString(),
            });
            setFormSubmitted(true);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <section className="py-20 lg:py-[120px] overflow-hidden relative z-10 lg:px-16 p-4 contact-section">
                <div>
                    <div className="flex flex-wrap -mx-4 lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12" data-aos="fade-right">
                            <div className="mb-12 max-w-[570px] lg:mb-0 text-green">
                                <h2 className="text-green mb-6 lg:text-5xl text-3xl font-bold uppercase">
                                    Kapcsolat
                                </h2>
                                <p className="text-base leading-relaxed mb-9 text-green font-semibold">
                                    Időpontot foglalna? Kérdése van? Egyedi árajánlat érdekli?
                                    Lépjen velünk kapcsolatba az űrlap kitöltésével és hamarosan válaszolunk levelére!
                                </p>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-8">
                                        <AiOutlineHome className="w-12 h-12" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold">
                                            Cím
                                        </h4>
                                        <p className="text-base font-semibold">
                                            2626 Nagymaros, Váci út 96.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-8">
                                        <PiPhoneDisconnectBold className="w-12 h-12" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold">
                                            Telefonszám
                                        </h4>
                                        <a href="tel:+36303438867" className="text-base font-semibold">
                                            +36 30 343 8867
                                        </a>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-8">
                                        <AiOutlineMail className="w-12 h-12" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold">
                                            Email cím
                                        </h4>
                                        <a href="mailto:maros-wax@maros-wax.hu"
                                            className="text-base font-semibold">
                                            maros-wax@maros-wax.hu
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12"  data-aos="fade-left">
                            <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                                <form
                                    data-netlify="true"
                                    name="contact"
                                    method="POST"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={handleSubmit}
                                >
                                    <input type="hidden" name="form-name" value="contact" />
                                    <ContactInputBox
                                        type="text"
                                        name="name"
                                        placeholder="Teljes név"
                                    />
                                    <ContactInputBox
                                        type="email"
                                        name="email"
                                        placeholder="Email cím"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="phone"
                                        placeholder="Telefonszám"
                                    />
                                    <ContactTextArea
                                        row={6}
                                        placeholder="Üzenet"
                                        name="details"
                                        defaultValue=""
                                    />
                                    <div>
                                        {formSubmitted && (
                                            <p className="text-green text-center">Sikeres küldés! Hamarosan felvesszük Önnel a kapcsolatot.</p>
                                        )}
                                        <button
                                            type="submit"
                                            className="w-full p-3 text-white transition border rounded border-primary bg-green hover:bg-opacity-90"
                                        >
                                            Küldés
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <ContactFormIcons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


interface ContactTextAreaProps {
    row: number;
    placeholder: string;
    name: string;
    defaultValue?: string;
}

const ContactTextArea: React.FC<ContactTextAreaProps> = ({
    row,
    placeholder,
    name,
    defaultValue
}) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color
                     outline-none focus:border-primary focus-visible:shadow-none"
                    defaultValue={defaultValue}
                    required
                />
            </div>
        </>
    );
};

interface ContactInputBoxProps {
    type: string;
    placeholder: string;
    name: string;
}

const ContactInputBox: React.FC<ContactInputBoxProps> = ({
    type,
    placeholder,
    name
}) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    required
                />
            </div>
        </>
    );
};
