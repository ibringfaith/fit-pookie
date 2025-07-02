from PIL import Image
import numpy as np

def read_input(path_name):
    im = Image.open(path_name)
    return im

def img_to_rgb_arr(image):
    rows, cols = image.size
    rgb_image = image.convert('RGB')
    pixels = [[] for _ in range(rows)]
    
    for x in range(rows):
        for y in range(cols):
            r, g, b = rgb_image.getpixel((x, y))
            pixels[x].append((r, g, b))
    return pixels
    

if __name__ == "__main__":
    # Test 1: Print image size
    # might break if file organization is changed
    image = read_input(r"C:\Users\kathe\OneDrive\Desktop\Katherine\gap\coding\fit-pookie\testing\images\test1_graphic_shirt.jpg")
    print(image.format, image.size, image.mode)
    
    # Test 2: 
    pixel_arr = img_to_rgb_arr(image)
    print(len(pixel_arr[0]))
