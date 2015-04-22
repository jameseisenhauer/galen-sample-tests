
# Objects definition
=====================================
header                  id  header
menu                    css #menu
content                 id  content
side-panel              id  side-panel
footer                  id  footer
link_one                   id  li_one
link_two                   id  li_two
link_three                 id  li_three
link_four                  id  li_four
=====================================


@ Home Page Spec | *
-------------------------------
menu
    below: header 0px

content
    below: menu 0px


@ ^ | large, medium
--------------------------------
side-panel
    below: menu 0px
    width: 300px
    near: content 0px right

link_one
    left of: link_two 2 to 10px

link_two
    left of: link_three 2 to 10px

link_three
    left of: link_four 2 to 10px

link_four
    right of: link_three 2 to 10px


@ ^ | small
--------------------------------
content, side-panel
    width: 100% of screen/width


side-panel
    below: content 0px

link_one
    left of: link_two 150 to 200px

link_two
    right of: link_one 150 to 200px

link_three
    left of: link_four 150 to 200px
    below: link_one 0 to 10px

link_four
    right of: link_three 150 to 200px
    below: link_two  0 to 10px
    inside: menu



