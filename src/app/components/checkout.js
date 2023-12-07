import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import InputMask from 'react-input-mask';
import Button from './button.js';
import Cookies from 'js-cookie';

export default function Checkout({ open, setOpen, url }) {

    const [firstName, setFirstName] = useState(Cookies.get('fn'));
    const [lastName, setLastName] = useState(Cookies.get('ln'));
    const [email, setEmail] = useState(Cookies.get('email'));
    const [whatsapp, setWhatsapp] = useState(Cookies.get('whatsapp'));
    const emailInputRef = useRef(null);

    const cleanNumber = (input) => {
        return input.replace(/\D/g, '');
    };

    const handlePopupClose = () => {
        // console.log("opa!")
        // setOpen(false);
        if (!firstName || !lastName || !email || !whatsapp) {
            return;
        }
        // handleSubmit(e)
        Cookies.set('fn', firstName);
        Cookies.set('ln', lastName);
        Cookies.set('email', email);
        Cookies.set('whatsapp', cleanNumber(whatsapp));

    };

    const handleEmailClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (open && emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, [open]);

    const generateLinkerParam = (a) => {
        // Function to properly grab ID's from Cookies
        var getCookiebyName = function (name) {
            var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
            return !!pair ? pair[1].match(/GA1\.[0-9]\.(.+)/)[1] : undefined;
        };

        // These are the 3 values used by the new linker
        var cookies = {
            _ga: getCookiebyName("_ga"),
            // Google Analytics GA ID
            _gac: undefined,
            // Google Remarketing
            _gid: getCookiebyName("_gid")// Google ID
        };

        // Calculate current browser_fingerprint based on UA, time, timezone and language
        // 
        var browser_fingerprint = (function (a, b) {
            var F = function (a) {
                // Didnt check what this does, the algo just needs F to be defined. commenting out
                Ne.set(a)
            };
            a = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
            if (!(b = F)) {
                b = Array(256);
                for (var c = 0; 256 > c; c++) {
                    for (var d = c, e = 0; 8 > e; e++)
                        d = d & 1 ? d >>> 1 ^ 3988292384 : d >>> 1;
                    b[c] = d
                }
            }

            F = b;
            b = 4294967295;
            for (c = 0; c < a.length; c++)
                b = b >>> 8 ^ F[(b ^ a.charCodeAt(c)) & 255];
            return ((b ^ -1) >>> 0).toString(36);
        }
        )();

        // Function to hash the cookie value
        // The following functions takes a string and returns a hash value.
        var hash_cookie_value = function (val) {
            var A, C, D = function (a) {
                A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.";
                C = {
                    "0": 52,
                    "1": 53,
                    "2": 54,
                    "3": 55,
                    "4": 56,
                    "5": 57,
                    "6": 58,
                    "7": 59,
                    "8": 60,
                    "9": 61,
                    "A": 0,
                    "B": 1,
                    "C": 2,
                    "D": 3,
                    "E": 4,
                    "F": 5,
                    "G": 6,
                    "H": 7,
                    "I": 8,
                    "J": 9,
                    "K": 10,
                    "L": 11,
                    "M": 12,
                    "N": 13,
                    "O": 14,
                    "P": 15,
                    "Q": 16,
                    "R": 17,
                    "S": 18,
                    "T": 19,
                    "U": 20,
                    "V": 21,
                    "W": 22,
                    "X": 23,
                    "Y": 24,
                    "Z": 25,
                    "a": 26,
                    "b": 27,
                    "c": 28,
                    "d": 29,
                    "e": 30,
                    "f": 31,
                    "g": 32,
                    "h": 33,
                    "i": 34,
                    "j": 35,
                    "k": 36,
                    "l": 37,
                    "m": 38,
                    "n": 39,
                    "o": 40,
                    "p": 41,
                    "q": 42,
                    "r": 43,
                    "s": 44,
                    "t": 45,
                    "u": 46,
                    "v": 47,
                    "w": 48,
                    "x": 49,
                    "y": 50,
                    "z": 51,
                    "-": 62,
                    "_": 63,
                    ".": 64
                };
                for (var b = [], c = 0; c < a.length; c += 3) {
                    var d = c + 1 < a.length
                        , e = c + 2 < a.length
                        , g = a.charCodeAt(c)
                        , f = d ? a.charCodeAt(c + 1) : 0
                        , h = e ? a.charCodeAt(c + 2) : 0
                        , p = g >> 2;
                    g = (g & 3) << 4 | f >> 4;
                    f = (f & 15) << 2 | h >> 6;
                    h &= 63;
                    e || (h = 64,
                        d || (f = 64));
                    b.push(A[p], A[g], A[f], A[h])
                }
                return b.join("")
            };
            return D(String(val));
        };

        // Now we have all the data Let's build the linker String! =)
        // First value is a fixed "1" value, the current GA code does the same. May change in a future
        return ["1", browser_fingerprint, "_ga", hash_cookie_value(cookies._ga), "_gid", hash_cookie_value(cookies._gid)].join('*');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !whatsapp) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        if (!email.includes("@")) {
            alert("Por favor, o campo e-mail com um e-mail válido!");
            return;
        }
        let phone = whatsapp.replace(/[^\d]/g, "")
        if (phone.length < 11) {
            alert("Por favor, o campo whatsapp com um número válido!");
            return;
        }
        Cookies.set('fn', firstName);
        Cookies.set('ln', lastName);
        Cookies.set('email', email);
        Cookies.set('whatsapp', cleanNumber(whatsapp));
        // let a = Cookies.get("_ga").substring(6);
        // let b = Cookies.get("_ga_KJJX78W84Y").substring(6);
        // console.log(window.dataLayer)
        // let gl = window.dataLayer.glBridge.generate({ _ga: a, _ga_XXXXXXXXX: b });
        let parm = generateLinkerParam();
        const url_checkout = `${url}&name=${firstName + " " + lastName}&email=${email}&phonenumber=${whatsapp}&_gl=${parm}`;
        setTimeout(() => {
            window.location.href = url_checkout;
        }, 1000);
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
                                                <form name="checkout" >
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
                                                            href="#"
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

