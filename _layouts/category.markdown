---
layout: page
---
<article class="project" style="counter-reset: post {{ site.categories[page.category].size | minus: 'site.tags[log].size' }}">
{{ content }}
{%- if site.posts.size > 0 -%}
<nav class="nav-post">
    <div id="vr"></div>
    <details class="menu-post">
        <summary></summary>
        <ol reversed>
        {% for post in site.categories[page.category] %}
        {% if post.tags contains 'post' %}
            <li>
                <a href="#{{ post.title | escape }}">{{ post.title | replace:'_', ' ' | escape }}</a>
            </li>
        {% endif %}
        {% endfor %}
        </ol>
    </details>
</nav>
<article class="post">
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
        <header class="header-post">
            <h1 class="title-post" id="{{ post.title | escape }}">{{ post.title | replace:'_', ' ' | escape }}</h1>
        </header>
        <section class="content-post">
        {%- assign date_format = site.minima.date_format | default: "%d %b %Y %R%Z" -%}
        <time class="post-meta" datetime="{{ post.date }}">{{ post.date | date: date_format }}</time>
            <a href="{{site.baseurl}}/categories/#{{category|slugize}}">{{ category }}</a>
                {%- if site.show_excerpts -%}
                {{ post.excerpt }}
                {%- endif -%}
        </section>
        <aside>
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