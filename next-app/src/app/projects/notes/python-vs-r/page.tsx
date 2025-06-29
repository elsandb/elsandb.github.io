"use client"
import 'highlight.js/styles/github.css';
import React from 'react';
import Lead from '@/components/text/lead';
import { PostHeader } from '@/components/text/post-related';
import Link from 'next/link'

export default function Page() {
  return (
    <div className="d-grid p-2 p-sm-3 p-md-4 text-center text-sm-start">
      <div className="row justify-content-center fw-light fs-6 pt-4">
        <div className="col-sm-11 col-md-10 col-xl-9 text-start pt-2">

          <PostHeader
            title={'Python vs. R'}
            publishedDate={'2025-06-29'} />
          <p>🚧🧹 Work in progress 🧹🚧</p>
          <Lead>As someone fluent in Python, I wanted to explore R and began with the <Link href="https://www.w3schools.com/r/default.asp" target="_blank" rel="external noopener noreferrer">R tutorial on W3Schools</Link>. W3Schools have a similar <Link href="https://www.w3schools.com/python/default.asp" target="_blank" rel="external noopener noreferrer">tutorial for Python</Link>. Below is a structured overview of key differences between Python and R, focusing on common operations and syntax. The aim is to provide a quick reference for those familiar with Python who want to understand how similar tasks are performed in R (or vice versa).</Lead>
        </div>
      </div>
      {/* Table */}
      <div className="row d-flex justify-content-center text-center">
          <div className="col-sm-11 col-md-10 col-xl-9 text-start pt-2">
            <ComparisonTable />
          </div>
      </div>
    </div>
  )
}


function ComparisonTable() {
  return (
    <table className="table table-hover table-bordered* table-sm table-responsive-sm">
      <thead>
        <tr className='table-secondary fs-5'>
          <th>What</th>
          <th>Python</th>
          <th>R</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Comment</td>
          <td><code>#</code></td>
          <td><code>#</code></td>
        </tr>
        <tr>
          <td>Asignment operator</td>
          <td><strong><code>=</code></strong> (<code>x = 5</code> or <code>x: int = 5</code>)</td>
          <td>
            <strong><code>&lt;-</code></strong> or <strong><code>=</code></strong>, but <code>=</code> are not always allowed, so I choose <code>&lt;-</code>. (<code>x &lt;- 5L</code>).<br />
            <strong><code>&lt;&lt;-</code></strong> is a global assigner.
          </td>
        </tr>
        <tr>
          <td>Code blocks are defined by</td>
          <td>Indentation</td>
          <td>Curly brackets <code>{`{}`}</code></td>
        </tr>
        <tr>
          <td>If-else statements</td>
          <td>
            <pre><code>if b &gt; a:<br />&nbsp;&nbsp;&nbsp;&nbsp;print(&quot;b is best&quot;)<br />elif b == a:<br />&nbsp;&nbsp;&nbsp;&nbsp;print(&quot;a and b are the same&quot;)<br />else:<br />&nbsp;&nbsp;&nbsp;&nbsp;print(&quot;a is best&quot;)</code></pre>
          </td>
          <td>
            <pre>
              <code>if (b &gt; a) {"{"}<br /> &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;b is best&quot;)<br />{"}"} else if (a == b) {"{"}<br /> &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;a and b are the same&quot;)<br />{"}"} else {"{"}<br /> &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;a is best&quot;)<br />{"}"}</code>
            </pre>
          </td>
        </tr>
        <tr>
          <td colSpan={3} className='fw-bold table-success'>Data types</td>
        </tr>
        <tr>
          <td>Check data type</td>
          <td><code>type(var_name)</code></td>
          <td><code>class(varName)</code></td>
        </tr>
        <tr>
          <td>Numbers</td>
          <td>
            <ul className="list-disc pl-4">
              <li><code>int</code> (<code>22</code>, <code>56</code>)</li>
              <li><code>float</code> (<code>3.2</code>, <code>104.6</code>)</li>
            </ul>
          </td>
          <td>
            <ul className="list-disc pl-4">
              <li><code>integer</code> (<code>22L</code>, <code>56L</code>)</li>
              <li><code>numeric</code> may also be an integer (<code>3.2</code>, <code>7</code>, <code>104.6</code>)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>String literals</td>
          <td><code>str</code> (<code>&quot;Z&quot;</code>, <code>&quot;Hello&quot;</code>, <code>&apos;Hi&apos;</code>, <code>&quot;2.5&quot;</code>)</td>
          <td><code>character</code> (<code>&quot;Z&quot;</code>, <code>&quot;Hello&quot;</code>, <code>&apos;Hi&apos;</code>, <code>&quot;2.5&quot;</code>)</td>
        </tr>
        <tr>
          <td>Boolean</td>
          <td><code>bool</code> (<code>True</code>, <code>False</code>)</td>
          <td><code>logical</code> (<code>TRUE</code>, <code>FALSE</code>)</td>
        </tr>
        <tr>
          <td>Casting / Type conversion</td>
          <td>
            <code>int(2.8)</code> → 2<br />
            <code>float(2)</code> → 2.0<br />
            <code>str(2)</code> → &quot;2&quot;
          </td>
          <td>
            <code>as.integer(2.8)</code> → 2<br />
            <code>as.numeric(2)</code> → 2<br />
            <code>as.character(2)</code> → &quot;2&quot;
          </td>
        </tr>
        <tr>
          <td className="fw-bold table-success" colSpan={3}>Arithmetic operators</td>
        </tr>
        <tr>
          <td>Addition, etc.</td>
          <td><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>, <code>&sol;&sol;</code></td>
          <td><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%%</code>, <code>^</code>, <code>%/%</code></td>
        </tr>
        <tr>
          <td>Common math functions</td>
          <td>
            <code>min()</code>, <code>max()</code>, <code>abs()</code>, <code>sqrt()</code><br />
            <code>math.ceil()</code>, <code>math.floor()</code>
          </td>
          <td>
            <code>min()</code>, <code>max()</code>, <code>abs()</code>, <code>sqrt()</code><br />
            <code>ceiling()</code>, <code>floor()</code>
          </td>
        </tr>
        <tr>
          <td className="fw-bold table-success" colSpan={3}>More about strings</td>
        </tr>
        <tr>
          <td>Multiline strings</td>
          <td>
            <code>multilineString = &quot;&quot;&quot;Multiline<br />string here...&quot;&quot;&quot;</code>
          </td>
          <td>
            <code>multilineString &lt;- &quot;Multiline<br />string here...&quot;</code><br />
            R adds newline character <code>\n</code><br />
            Use <code>cat(multilineString)</code> to preserve line breaks.
          </td>
        </tr>
        <tr>
          <td>String Length</td>
          <td><code>len(&quot;Hi&quot;)</code> → 2</td>
          <td><code>nchar(&quot;Hi&quot;)</code> → 2</td>
        </tr>
        <tr>
          <td>Check if substring is present</td>
          <td>
            <code>a = &quot;Hello&quot;</code><br />
            <code>&quot;e&quot; in a</code> → True<br />
            <code>a.index(&quot;o&quot;)</code> → 4
          </td>
          <td>
            <code>a &lt;- &quot;Hello&quot;</code><br />
            <code>grepl(&quot;h&quot;, a)</code> → FALSE<br />
            <code>grepl(&quot;h&quot;, a, ignore.case=TRUE)</code> → TRUE<br />
            <code>grepl(&quot;el&quot;, a)</code> → TRUE<br />
            <code>grep(&quot;o&quot;, a)</code> → 1<br />
            <a href="https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/grep" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">grep docs</a>, <a href="https://www.geeksforgeeks.org/r-language/difference-between-grep-vs-grepl-in-r/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">comparison grep/grepl</a>
          </td>
        </tr>
        <tr>
          <td>Concatenate strings</td>
          <td>
            <code>a = &quot;A str&quot;</code><br />
            <code>b = &quot;ing&quot;</code><br />
            <code>print(a + b)</code> → A string<br />
            <code>print(a, b)</code> → A str ing
          </td>
          <td>
            <code>a &lt;- &quot;A str&quot;</code><br />
            <code>b &lt;- &quot;ing&quot;</code><br />
            <code>paste0(a, b)</code> → &apos;A string&apos;<br />
            <code>paste(a, b)</code> → &apos;A str ing&apos;
          </td>
        </tr>
      </tbody>
    </table>
  )
}