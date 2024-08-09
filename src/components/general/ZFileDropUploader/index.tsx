// #region ---- Core Imports ----
import React, { useEffect, useMemo, useState } from "react";

// #endregion

// #region ---- Packages Imports ----
import Dropzone, { DropEvent, FileRejection } from "react-dropzone";
import { isZNonEmptyString } from "zaions-tool-kit";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { ZClassNames, ZDropzoneAccept } from "zaions-react-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import {
  ZAspectRatio,
  ZBox,
  ZButton,
  ZCard,
  ZFlex,
  ZSpinner,
  ZText,
} from "@src/components/radixUI";

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUDirectionE,
  ZRUJustifyE,
  ZRUTextAsE,
} from "@src/types";
interface ZFileDropUploaderI {
  children?: React.ReactNode;
  className?: string;
  multiple?: boolean;
  noClick?: boolean;
  required?: boolean;
  loading?: boolean;
  loadingText?: string;
  noDrag?: boolean;
  isTouched?: boolean;
  errorMessage?: string;
  infoText?: string;
  accept?: ZDropzoneAccept;
  ratio?: number;
  labelClassName?: string;
  label?: string;
  localUrl?: string | null;
  disabled?: boolean;
  noKeyboard?: boolean;
  // onChange?: (files: File[]) => void;
  onFileDialogCancel?: () => void;
  onFileDialogOpen?: () => void;
  onDragEnter?: React.DragEventHandler<HTMLElement>;
  onDragLeave?: React.DragEventHandler<HTMLElement>;
  onDragOver?: React.DragEventHandler<HTMLElement>;
  onDropAccepted?: <T extends File>(files: T[], event: DropEvent) => void;
  onDropRejected?: (fileRejections: FileRejection[], event: DropEvent) => void;
  onChange?: <T extends File>(params: {
    acceptedFiles: T[];
    fileRejections: FileRejection[];
    event: DropEvent;
    localUrl: string;
  }) => void;
}
// #endregion

const ZFileDropUploader: React.FC<ZFileDropUploaderI> = ({
  className,
  children,
  multiple,
  noClick,
  accept,
  ratio = 14 / 7,
  noDrag,
  label,
  required,
  labelClassName,
  isTouched,
  errorMessage,
  infoText,
  disabled,
  noKeyboard,
  localUrl,
  loading,
  loadingText = "Loading File...",
  onChange,
  onFileDialogCancel,
  onFileDialogOpen,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDropAccepted,
  onDropRejected,
}) => {
  const _isError = useMemo(
    () =>
      Array.isArray(errorMessage)
        ? errorMessage?.length > 0
        : typeof errorMessage === "string"
        ? isZNonEmptyString(errorMessage)
        : false,
    [errorMessage]
  );

  return (
    <ZBox className={ZClassNames(className)}>
      {isZNonEmptyString(label) ? (
        <ZText
          as={ZRUTextAsE.label}
          size="1"
          className={ZClassNames("text-base block", labelClassName)}
        >
          {label}
          {required ? (
            <ZText
              as={ZRUTextAsE.span}
              className="ms-1"
              color={ZRUColorE.tomato}
            >
              *
            </ZText>
          ) : null}
        </ZText>
      ) : null}
      <Dropzone
        multiple={multiple}
        noClick={disabled ?? loading ?? noClick}
        accept={accept}
        noDrag={disabled ?? loading ?? noDrag}
        noKeyboard={disabled ?? loading ?? noKeyboard}
        onFileDialogCancel={onFileDialogCancel}
        onFileDialogOpen={onFileDialogOpen}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        onDragLeave={onDragLeave}
        onDrop={(acceptedFiles, fileRejections, event) => {
          if (!disabled || !loading) {
            const file =
              typeof acceptedFiles[0] === "object" ? acceptedFiles[0] : null;
            let url = "";
            if (file) {
              url = URL.createObjectURL(file);
            }
            if (onChange !== undefined) {
              onChange({
                acceptedFiles,
                fileRejections,
                event,
                localUrl: url,
              });
            }
          }
        }}
      >
        {({ getRootProps, getInputProps, open, isDragActive }) => {
          // if (children) {
          //   return (
          //     <ZFlex className="flex-col" {...getRootProps()}>
          //       <input {...getInputProps()} />
          //       {children}
          //     </ZFlex>
          //   );
          // } else {
          return (
            <ZCard
              className={ZClassNames("p-0", {
                "opacity-40 cursor-not-allowed": disabled,
              })}
              style={
                isDragActive
                  ? {
                      boxShadow: "0 0 1rem var(--accent-4)",
                    }
                  : undefined
              }
            >
              <ZAspectRatio ratio={ratio}>
                <ZFlex
                  className="w-full h-full gap-3"
                  align={ZRUAlignE.center}
                  justify={ZRUJustifyE.center}
                  direction={ZRUDirectionE.column}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isZNonEmptyString(localUrl) ? (
                    <img
                      src={localUrl ?? ""}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <>
                      {loading ? (
                        <ZSpinner size="3" />
                      ) : (
                        <FilePlusIcon className="w-10 h-10" />
                      )}
                      <ZText className="font-medium">
                        {loading ? loadingText : "Drag & drop your file here"}
                      </ZText>
                      <ZButton
                        color={ZRUColorE.gold}
                        onClick={() => noClick && open()}
                        disabled={loading || disabled}
                        type="button"
                      >
                        Choose file
                      </ZButton>
                    </>
                  )}
                </ZFlex>
              </ZAspectRatio>
            </ZCard>
          );
          // }
        }}
      </Dropzone>
      {/* Error */}
      {isTouched && _isError ? (
        <ZText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.tomato}
          className="font-medium"
        >
          {Array.isArray(errorMessage) ? errorMessage[0] : errorMessage}
        </ZText>
      ) : null}

      {/* Info */}
      {!isTouched && isZNonEmptyString(infoText) ? (
        <ZText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.gold}
          className="font-medium"
        >
          {infoText}
        </ZText>
      ) : null}
    </ZBox>
  );
};

export default ZFileDropUploader;
