import glob
import hashlib

groups = [path.split("\\")[1] for path in glob.glob("scenes/*/")]

for group in groups:
    scenes = [
        path.split("\\")[1].split(".")[0] for path in glob.glob(f"scenes/{group}/*.jpg")
    ]

    with open(f"scenes/{group}/imports.js", "w", encoding="utf-8") as f:
        scene_hashes = [
            (scene, hashlib.sha256(scene.encode("utf-8")).hexdigest()[:16])
            for scene in scenes
        ]

        for scene, hash in scene_hashes:
            f.write(f'import image_{hash} from "./{scene}.jpg";\n')

        f.write("\n")
        f.write("const IMAGES = {\n")
        for scene, hash in scene_hashes:
            f.write(f"  '{scene}': image_{hash},\n")
        f.write("};\n")
        f.write("\n")
        f.write("export default IMAGES;\n")

with open("scenes/imports.js", "w", encoding="utf-8") as f:
    group_hashes = [
        (group, hashlib.sha256(group.encode("utf-8")).hexdigest()[:16])
        for group in groups
    ]

    for group, hash in group_hashes:
        f.write(f'import scenes_{hash} from "./{group}/imports.js";\n')

    f.write("\n")
    f.write("const SCENES = {\n")
    for group, hash in group_hashes:
        f.write(f"  '{group}': scenes_{hash},\n")
    f.write("};\n")
    f.write("\n")
    f.write("export default SCENES;\n")
