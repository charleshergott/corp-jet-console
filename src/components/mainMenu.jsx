import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // useEffect(() => {
    //     (function () {
    //         function onTidioChatApiReady() {
    //             window.tidioChatApi.hide();
    //         }

    //         if (window.tidioChatApi) {
    //             window.tidioChatApi.on("ready", onTidioChatApiReady);
    //         }

    //         document.querySelector(".chat-button").addEventListener("click", function () {
    //             window.tidioChatApi.show();
    //             window.tidioChatApi.open();
    //         });
    //     })();
    // }, [])

    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Include the WelcomeMessage component here 
                <WelcomeMessage />*/}
                <a className="navbar-brand" href="#" style={{ wordWrap: 'break-word' }}>
                    WELCOME TO YOUR OPERATOR CONSOLE
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">


fixed-top


                            <a className="nav-link active" aria-current="page" href="#"><Link to={"/newFlight"}>Publish flight</Link></a>
                        </li> */}



                        {/* <li className="nav-item">
                             <a className="nav-link active" aria-current="page" href="#">Support</a> 
                        <button className="chat-button">Live Chat</button>
                    </li> */}


                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Billing</a>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                API Integration
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">FLEXX</a></li>
                                <li><a className="dropdown-item" href="#">Optirise</a></li>
                                <li><a className="dropdown-item" href="#">LEON Connect</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Other</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">API Integration</a>
                        </li> */}

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </header >
    )
}
