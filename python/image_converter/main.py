from PIL import Image
import os

def convert_image_to_gray_and_binary(input_path):
    if not os.path.exists(input_path):
        print(f"Error: File '{input_path}' does not exist.")
        return None, None

    try:
        img_color = Image.open(input_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return None, None

    img_gray = img_color.convert('L')
    
    img_binary = img_gray.copy()

    threshold = int(img_gray.histogram()[1] / 2)

    for x in range(img_binary.size[0]):
        for y in range(img_binary.size[1]):
            if img_binary.getpixel((x, y)) < threshold:
                img_binary.putpixel((x, y), 0)
            else:
                img_binary.putpixel((x, y), 255)

    output_dir = os.path.splitext(input_path)[0] + '_converted'
    os.makedirs(output_dir, exist_ok=True)

    img_gray.save(os.path.join(output_dir, 'imagem_cinza.png'))
    img_binary.save(os.path.join(output_dir, 'imagem_binaria.png'))

    print(f"Imagens convertidas e salvas em: {output_dir}")

    return img_gray, img_binary

input_path = 'image.jpg'
convert_image_to_gray_and_binary(input_path)
