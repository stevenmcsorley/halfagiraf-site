from PIL import Image, ImageDraw, ImageFont
import os

output_dir = "public/frames/system"
os.makedirs(output_dir, exist_ok=True)

# 1920x1080, dark background, cyan text
width, height = 1920, 1080
bg_color = (26, 26, 26) # #1a1a1a
text_color = (0, 255, 255) # Cyan

try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 100)
except:
    font = ImageFont.load_default()

for i in range(200):
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw simple motion - a bar moving across
    bar_width = 20
    progress = i / 199
    x_pos = int(progress * (width - bar_width))
    draw.rectangle([x_pos, height//2 - 100, x_pos + bar_width, height//2 + 100], fill=text_color)
    
    text = f"SYSTEM SEQUENCE {i:03d}"
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    draw.text(((width - text_width) / 2, (height - text_height) / 2), text, font=font, fill=text_color)
    
    # Save 1-indexed ezgif-frame-XXX.jpg
    filename = f"ezgif-frame-{i+1:03d}.jpg"
    img.save(os.path.join(output_dir, filename), quality=80)
    print(f"Generated {filename}", end='\r')

print("\nDone.")
