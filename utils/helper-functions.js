import { DEVICES_SIZE } from '~/constants';

let createImageObject = (image, lang) => ({
  imgWeb: image?.fileUrl,
  imgMobile: image?.children?.find(
    (item) => item.imageDeviceSize == DEVICES_SIZE.MOBILE
  )?.fileUrl,
  imgTablet: image?.children?.find(
    (item) => item.imageDeviceSize == DEVICES_SIZE.TABLET
  )?.fileUrl,
  fileName: image?.fileName,
  caption: image?.postFileCaption?.localizations?.[lang]?.caption,
});

const helperFunctions = {
  findImg(data, type, lang) {
    let image = data?.postFiles?.find((file) =>
      file?.postFileImageType?.find(
        (postType) => postType?.imageType?.name === type
      )
    );

    if (image) {
      return createImageObject(image, lang);
    } else return null;
  },

  filterImg(data, type, lang) {
    return data?.postFiles
      ?.filter((file) =>
        file.postFileImageType?.find(
          (postType) => postType.imageType.name == type
        )
      )
      ?.map((image) => {
        return createImageObject(image, lang);
      });
  },

  findImgMultiTypes(data, type1, type2, lang) {
    let image = data?.postFiles?.find((file) =>
      file.postFileImageType?.find(
        (postType) =>
          postType.imageType.name == type1 || postType.imageType.name == type2
      )
    );

    if (image) {
      return createImageObject(image, lang);
    } else return null;
  },

  findChildPost(data, type) {
    return data?.childrenPosts?.find(
      (post) => post?.contentType?.code === type
    );
  },

  filterChildPost(data, type) {
    return data?.childrenPosts?.filter(
      (post) => post?.contentType?.code === type
    );
  },

  filterPDF(data, type) {
    return data?.postFiles
      ?.filter((file) => file?.fileType === type)
      ?.map((item) => ({
        fileId: item?.id,
        fileUrl: item?.fileUrl,
        fileName: item?.fileName,
        fileOrder: item?.fileOrder,
      }));
  },

  filterCode(data) {
    return data?.postCategories?.find(
      (postType) =>
        postType.contentCategory.code == 'main' ||
        postType.contentCategory.code == 'secondary'
    )?.contentCategory?.code;
  },
};

export default helperFunctions;
