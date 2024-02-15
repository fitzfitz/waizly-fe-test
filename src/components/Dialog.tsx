import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import IconButton from "./IconButton";

interface IDialog {
  show?: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
  title?: string;
  children?: ReactNode;
}

const Dialog = ({
  show,
  onClose,
  title,
  hideCloseButton = false,
  children,
}: IDialog) => {
  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          key={"modal"}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={
            "fixed left-0 top-0 grid h-screen w-screen place-items-center bg-black/20 backdrop-blur-sm"
          }
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            className="w-80 rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-b-gray-200 px-4 py-2 font-bold">
              <span className="text-sm">{title}</span>
              {!hideCloseButton ? (
                <IconButton onClick={onClose}>
                  <IoClose />
                </IconButton>
              ) : null}
            </div>
            <div className="p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("root") as Element,
  );
};

export default Dialog;
