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

    # Find the link block
    link_match = re.search(r'(<a[^>]*href="https://www\.google\.com/maps/search[^>]+>.*?</a>)', content, re.DOTALL)
    if not link_match:
        print('No match in', file)
        continue
    
    link_html = link_match.group(1)
    
    # Remove link from hero section
    content = content.replace(link_html, '')
    
    # Clean up the flex container around the paragraph if it exists
    content = re.sub(r'<div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">\s*(<p.*?>\s*<MapPin.*?>.*?</p>)\s*</div>', r'\1', content, flags=re.DOTALL)
    
    # Modify classes for the white background
    new_link_html = re.sub(r'bg-white/20 hover:bg-white/30 text-white[^"]*', 'bg-[var(--color-primary)] hover:opacity-90 text-white px-4 py-2 rounded-full transition-opacity text-sm font-medium w-fit', link_html)
    
    # Now inject it into the "Acerca del destino" header
    acerca_block = """<div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Acerca del destino</h2>
          </div>"""
          
    new_acerca_block = f"""<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
            <div className="flex items-center gap-3 text-[var(--color-primary)]">
              <Info className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Acerca del destino</h2>
            </div>
            {new_link_html.strip()}
          </div>"""
          
    content = content.replace(acerca_block, new_acerca_block)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated', file)
