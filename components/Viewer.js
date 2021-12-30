import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, } from 'react';
import Video from './Video';
import { selectVideo, openVideoPlayer, closeVideoPlayer, selectedVideo, selectedOpenView } from '../state/videoSlice'
import videoSlice from '../state/videoSlice';
import { useDispatch, useSelector, connect } from "react-redux";
import { useEffect } from 'react';

function Viewer({selectedOpenView, selectedVideo}) {
    const dispatch = useDispatch();
    const mapStateToProps = (state) => ({
  modal: state.modal
    });

    const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
    });
    
  let [isOpen, setIsOpen] = useState(false)
  let openView = useSelector(selectedOpenView)
  //let [isOpen, setIsOpen] = useState(useSelector(selectedOpenView))
    useEffect(() => {
    if(!openView) {
 /*  function closeModal() { */
    setIsOpen(false)
  }
if(openView) {
  /* function openModal() { */
    setIsOpen(true)
  }
},[openView])
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          //onClick={openModal}
          onClick={dispatch(openVideoPlayer())}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
         // onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                    <Video />
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={dispatch(closeVideoPlayer())}
                    //onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

//export default Viewer;

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);