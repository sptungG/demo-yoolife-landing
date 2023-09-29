import { ClassValue } from 'clsx';
import { useId, useRef } from 'react';
import { cn } from 'src/common/utils';
import { ArrowsPointOutSvg } from '../icons';

type TImageModalProps = {
  content?: React.ReactNode;
  classNameBtn?: ClassValue;
  classNameDialog?: ClassValue;
};

function ImageModal({
  content,
  classNameBtn,
  classNameDialog,
}: TImageModalProps) {
  const uid = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        className={cn(
          'flex items-center justify-center bg-green-50 text-green3',
          classNameBtn,
        )}
        onClick={(e) => {
          dialogRef.current?.showModal();
          document.body.classList.add('overflow-hidden');
          dialogRef.current?.classList.remove('hidden');
        }}
      >
        <ArrowsPointOutSvg className="h-6 w-6" />
      </button>
      <dialog
        ref={dialogRef}
        className={cn(
          'hidden max-h-[100dvh] rounded bg-gray-50/50 backdrop-blur-sm backdrop:backdrop-blur-sm',
          classNameDialog,
        )}
      >
        <div className="relative py-14">
          <button
            className="absolute right-2 top-2 rounded bg-gray-50 px-4 py-2"
            onClick={(e) => {
              dialogRef.current?.close();
              document.body.classList.remove('overflow-hidden');
              dialogRef.current?.classList.add('hidden');
            }}
          >
            Đóng
          </button>
          {content}
        </div>
      </dialog>
    </>
  );
}

export default ImageModal;
