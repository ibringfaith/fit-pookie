from PIL import Image
import numpy as np
from skimage import io 
from pyxelate import Pyx, Pal
import matplotlib.pyplot as plt

def read_input(path_name):
    im = Image.open(path_name)
    return im

def img_to_rgb_arr(image):
    rows, cols = image.size
    pixels = [[] for _ in range(rows)]
    
    for x in range(rows):
        for y in range(cols):
            r, g, b = image.getpixel((x, y))
            pixels[x].append((r, g, b))
    return pixels

def resize_im(image, resize_factor):
    rows, cols = image.size
    new_rows, new_cols = max(1, rows // resize_factor), max(1, cols // resize_factor)
    downsize = image.resize((new_cols, new_rows), resample = 0)
    pixelated_img = downsize.resize((cols, rows), resample = 0)
    return pixelated_img

def resize_im_2(path, reduce_by, num_colors):
    image = io.imread(path)
    pixelated = Pyx(factor=reduce_by, palette=num_colors, dither="bayer").fit_transform(image)
    
    return pixelated

if __name__ == "__main__":
    # Test 1 - Print image size:
    # might break if file organization is changed
    image = read_input(r"..\testing\images\test1_graphic_shirt.jpg")
    print(f"The size of the image is: {image.size} pixels. The image is in {image.mode} mode.")
    
    # Test 2 - Conbert the image into a 2D array of RGB tuple values:
    pixel_arr = img_to_rgb_arr(image)
    print(f"The size of the 2D RGB Array is: ({len(pixel_arr)}, {len(pixel_arr[0])}).")
    
    # Test 3 - Resizing the image down to create a sort of "pixel art" effect:
    resized = resize_im(image, 10)
    print(f"The size of the image is: {resized.size} pixels.")
    resized.save(r"..\effects\shirt1_downsizeBy10.jpg")
    
    # # Test 4 - Pixelation v2:
    # for scale_val in range(3, 10):
    #     for num_colors in range(3, 8):
    #         resized2 = resize_im_2(r"..\testing\images\test1_graphic_shirt.jpg", scale_val, num_colors)
    #         plt.imshow(resized2)
    #         path = f"\shirt_{scale_val}_{num_colors}.jpg"
    #         path = r"..\effects" + path
    #         plt.savefig(path, dpi=300)
            
    