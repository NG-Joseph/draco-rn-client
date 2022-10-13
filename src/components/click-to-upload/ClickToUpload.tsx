import { PropsWithChildren, useRef, useState } from "react";

type ClickToUploadProps = {
  onFileUpload: (file: File) => void;
  accept: string;
  multiple: boolean;
};
const ClickToUpload: React.FC<PropsWithChildren<ClickToUploadProps>> = ({
  onFileUpload,
  accept,
  multiple = false,
  children,
  ...props
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      onFileUpload(e.target.files[0]);
    }
  };
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div {...props} onClick={handleClick} style={{ cursor: "pointer" }}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      {children}
      {selectedFile && (
        <div>
          <p>{selectedFile.name}</p>
          <p>{selectedFile.size}</p>
        </div>
      )}
    </div>
  );
};

export default ClickToUpload;
