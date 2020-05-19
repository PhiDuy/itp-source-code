import React from "react";
import ImageUploader from "react-images-upload";

class UploadImage extends React.Component {
  onChange = picture => {
    this.props.onChange(picture);
  };

  render() {
    return (
      <ImageUploader
        withIcon={true}
        onChange={this.onChange}
        imgExtension={[".jpg", ".png", ".jpeg"]}
        maxFileSize={5242880}
        withPreview={true}
        label="Dung lượng hình tối đa : 1mb, có định dạng hình ảnh: png, jpg, jpeg"
        buttonText="Chọn hình ảnh"
        fileSizeError="Dung lượng hình quá lớn"
        fileTypeError="không thuộc định dạng cho phép"
      />
    );
  }
}

export default UploadImage;
