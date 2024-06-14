import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from '@/components/icons/outline'

type Props = {
    onClose: any,
    isOpen: boolean,
    title: string,
    content: any,
    size?: string,
    closable?: boolean
}

const Modal = ({ onClose, isOpen, title, content, size = 'xl', closable = true }: Props) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} className="fixed inset-0 bg-black bg-opacity-50" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex justify-center min-h-full p-4 text-center items-center">
                            <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <DialogPanel className={`max-w-${size} w-full p-6 text-left align-middle transition-all transform bg-neutral-800 shadow-xl rounded-3xl`}>
                                    <div className="flex items-center justify-between">
                                        <DialogTitle as="h3" className="text-xl font-medium leading-6 text-white">
                                            {title}
                                        </DialogTitle>
                                        {closable && (
                                            <button onClick={onClose} className="inline-flex items-center p-2 transition bg-neutral-900 rounded-full active:hover:scale-90">
                                                <X className="w-4 h-4" strokeWidth={1.5} />
                                            </button>
                                        )}
                                    </div>
                                    {content}
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal