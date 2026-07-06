import os
import re

files = [
    'src/pages/CarmenDePatagonesPage.tsx',
    'src/pages/BahiaSanBlasPage.tsx',
    'src/pages/LosPocitosPage.tsx',
    'src/pages/StroederPage.tsx',
    'src/pages/SalinaDePiedrasPage.tsx',
    'src/pages/Villa7DeMarzoPage.tsx',
    'src/pages/VillalongaPage.tsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add imports
    if 'import FolleteriaModal' not in content:
        # Add FolleteriaModal import
        content = re.sub(r'(import {.*?}\s+from\s+[\'"]react-router-dom[\'"];)', r'\1\nimport FolleteriaModal from \'../components/FolleteriaModal\';', content)
        
    if 'FileImage' not in content:
        content = re.sub(r'import\s*{\s*MapPin', 'import { MapPin, FileImage', content)
        
    if 'useState' not in content:
        content = "import { useState } from 'react';\n" + content

    # 2. Add state and brochures
    if 'isFolleteriaOpen' not in content:
        # Define brochures based on file
        if 'BahiaSanBlasPage.tsx' in file:
            brochures = """const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures = [
    { title: 'Plano de la localidad', image: '/images/folleteria/san-blas/plano-localidad.png' },
    { title: 'Plano de la isla', image: '/images/folleteria/san-blas/plano-isla.jpg' },
    { title: 'Circuito patrimonial', image: '/images/folleteria/san-blas/circuito-patrimonial.png' },
    { title: 'Guía de pesca', image: '/images/folleteria/san-blas/guia-pesca.png' }
  ];"""
        else:
            brochures = """const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures: any[] = [];"""
            
        content = re.sub(r'(export\s+default\s+function\s+\w+\(\)\s*\{)', r'\1\n  ' + brochures + '\n', content)

    # 3. Add Folletería button next to Ver en Maps
    if 'Folletería' not in content:
        # Find the <a href="...google.com/maps..." block
        link_match = re.search(r'(<a\s+[^>]*href="https://www\.google\.com/maps/search[^>]+>.*?</a>)', content, re.DOTALL)
        if link_match:
            link_html = link_match.group(1)
            buttons_wrapper = f"""<div className="flex gap-2 items-center flex-wrap">
              <button 
                onClick={{() => setIsFolleteriaOpen(true)}}
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-4 py-2 rounded-full transition-colors text-sm font-medium w-fit whitespace-nowrap"
              >
                <FileImage className="w-4 h-4" />
                Folletería
              </button>
              {link_html.strip()}
            </div>"""
            content = content.replace(link_html, buttons_wrapper)

    # 4. Add the FolleteriaModal component before the final closing div
    if 'FolleteriaModal isOpen' not in content:
        # Replace the last </div> in the file (or the second to last line)
        # We can just use a regex that matches the final </div>
        modal_html = "\n      <FolleteriaModal isOpen={isFolleteriaOpen} onClose={() => setIsFolleteriaOpen(false)} brochures={brochures} />\n    </div>\n  );\n}"
        content = re.sub(r'</div>\s*?\);\s*?}\s*$', modal_html, content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated', file)
