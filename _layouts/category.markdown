---
layout: page
---

{{ content }}

  {%- if site.posts.size > 0 -%}
    <details class="menu-process">
        <summary>
            <h1>Process</h1>
        </summary>
        <ol>
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
    <article>
        <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
                    {{ post.title | escape }}
                </a>
                </h3>
        {%- assign date_format = site.minima.date_format | default: "%d %b %Y %R%Z" -%}
            <time class="post-meta" datetime="{{ post.date }}">{{ post.date | date: date_format }}</time>
                <a href="{{site.baseurl}}/categories/#{{category|slugize}}">{{ category }}</a>
                {%- if site.show_excerpts -%}
                {{ post.excerpt }}
                {%- endif -%}
    </article>
    <details class="menu-process">
        <summary>
            <h1>Process</h1>
        </summary>
        <ol reversed>
        {% endif %}
    {% endfor %}
        </ol>
    </details>
  {%- endif -%}
</div>