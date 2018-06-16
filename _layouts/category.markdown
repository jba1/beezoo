---
layout: page
---
<article class="project" style="counter-reset: post {{ site.categories[page.category].size | plus: 1 }}">
{{ content }}
{%- if site.posts.size > 0 -%}
<div class="nav-underlay-post">
  <span class="marker-underlay"></span>
  <span class="title-underlay"></span>
</div>
<nav class="nav-post" style="counter-reset: postlink {{ site.categories[page.category].size | plus: 1 }}">
    <details class="menu-post">
        <summary>
        </summary>
        <ol reversed>
        {% for post in site.categories[page.category] %}
        {% if post.tags contains 'post' %}
            <li>
                <a href="#{{ post.title | escape }}">
                <span class="title-post">{{ post.title | replace:'_', ' ' | escape }}</span>
                {%- if post.tags.size > 1 -%}<span class="tags-post">{% for tag in post.tags %}{% if tag != "post" %}{% if post.tags.last != tag %}{{tag}} / {% else %}{{tag}}</span>{% endif %}
                  {% endif %}
                  {% endfor %}
                  {% endif %}
                </a>
            </li>
        {% endif %}
        {% endfor %}
        </ol>
    </details>
</nav>
<article class="post log-post">
    <aside>
        <details class="menu-process">
            <summary>
                <h1>Process</h1>
            </summary>
            <ol reversed>
                {% for post in site.categories[page.category] %}
                {% if post.tags contains 'log' %}
                <li>
                {%- assign date_format = site.minima.date_format | default: "%F-%H-%M-%S" -%}
                    <article id="{{ post.date | date: date_format }}" class="log">
                    {%- assign date_format = site.minima.date_format | default: "%d %b %Y %R%Z" -%}
                        <time class="post-meta" datetime="{{ post.date }}">{{ post.date | date: date_format }}</time>
                        <ul>
                            <li>
                            {%- if site.show_excerpts -%}
                            {{ post.excerpt }}
                            {%- endif -%}
                            </li>
                        </ul>
                    </article>
                </li>
                {% endif %}
                {% if post.tags contains 'post' %}
            </ol>
        </details>
    </aside>
    </article>
    <article class="post">
        <div class="spacer-post" id="{{ post.title | escape }}"></div>
        <div class="wrapper-post">
          <header class="header-post">
            <div>
              <div>
                <h1 class="title-post">{{ post.title | replace:'_', ' ' | escape }}</h1>
                {%- if post.tags.size > 1 -%}<span class="tags-post">{% for tag in post.tags %}{% if tag != "post" %}{% if post.tags.last != tag %}{{tag}} / {% else %}{{tag}}</span>{% endif %}
                {% endif %}
                {% endfor %}
                {% endif %}
              </div>
            </div>
          </header>
          <section class="content-post">
          {%- assign date_format = site.minima.date_format | default: "%d %b %Y %R%Z" -%}
          <!--<time class="post-meta" datetime="{{ post.date }}">{{ post.date | date: date_format }}</time>
              <a href="{{site.baseurl}}/categories/#{{category|slugize}}">{{ category }}</a>-->
                  {%- if site.show_excerpts -%}
                  {{ post.excerpt }}
                  {%- endif -%}
          </section>
          <hr>
          <div class="spacer-content-post"></div>
        </div>
        <aside class="log-post">
          <details class="menu-process">
            <summary>
              <h1>Process</h1>
            </summary>
            <ol reversed>
            {% endif %}
            {% endfor %}
            </ol>
          </details>
        </aside>
    </article>
</article>
{%- endif -%}
</article>
