import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import InputMask from 'react-input-mask';
import Button from './button.js';
import Cookies from 'js-cookie';

export default function Checkout({ open, setOpen, url }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const emailInputRef = useRef(null);

    const cleanNumber = (input) => {
        return input.replace(/\D/g, '');
    };

    const handlePopupClose = () => {
        if (!firstName || !lastName || !email || !whatsapp) {
            return;
        }
        Cookies.set('fn', firstName);
        Cookies.set('ln', lastName);
        Cookies.set('email', email);
        Cookies.set('whatsapp', cleanNumber(whatsapp));
        setOpen(false);
    };

    const handleEmailClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (open && emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, [open]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !whatsapp) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        Cookies.set('fn', firstName);
        Cookies.set('ln', lastName);
        Cookies.set('email', email);
        Cookies.set('whatsapp', cleanNumber(whatsapp));
        const url_checkout = `${url}&name=${firstName + " " + lastName}&email=${email}&phonenumber=${whatsapp}`;
        window.location.href = url_checkout;
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-60" onClose={handlePopupClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className=" transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white rounded-lg sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                    <div className="px-4 py-8 sm:px-10">
                                        <div className="relative mt-6">
                                            <div className="relative flex justify-center text-sm leading-5">
                                                <span className="text-2xl text-gray-800">Pré-cadastro</span>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <div className="w-full space-y-6">
                                                <form >
                                                    <div className="flex flex-col mb-2">
                                                        <div className=" relative ">
                                                            <input
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                onFocus={handleEmailClick}
                                                                type="text"
                                                                id="account-email"
                                                                name="email"
                                                                placeholder="Email"
                                                                required
                                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4 mb-2">
                                                        <div className=" relative ">
                                                            <input
                                                                value={firstName}
                                                                onChange={(e) => setFirstName(e.target.value)}
                                                                type="text"
                                                                id="account-first-name"
                                                                name="Primeiro nome"
                                                                placeholder="Primeiro nome"
                                                                required
                                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            />
                                                        </div>
                                                        <div className=" relative ">
                                                            <input
                                                                value={lastName}
                                                                onChange={(e) => setLastName(e.target.value)}
                                                                type="text"
                                                                id="account-last-name"
                                                                name="Sobrenome"
                                                                placeholder="Sobrenome"
                                                                required
                                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col mb-2">
                                                        <div className=" relative ">
                                                            <InputMask
                                                                value={whatsapp}
                                                                onChange={(e) => setWhatsapp(e.target.value)}
                                                                type="text"
                                                                id="account-whatsapp"
                                                                name="WhatsApp"
                                                                required
                                                                placeholder="WhatsApp"
                                                                mask="(99) 99999-9999"
                                                                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full my-4">
                                                        <Button
                                                            type="primary"
                                                            onClick={handleSubmit}
                                                            href=""
                                                            className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                        >
                                                            Finalizar Cadastro
                                                        </Button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                                        <p className="text-xs leading-5 text-gray-500">
                                            Não será necessário preencher novamente
                                        </p>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

