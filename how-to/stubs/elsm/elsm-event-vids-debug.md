### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
10/03/25

ChatGPT, poss proprietary ELSM


## CONTENT_BELOW: ##

---




Great observations and solid debugging trail so far. Based on everything you've outlined, here's a condensed **diagnostic + action checklist** to help identify and fix why "event videos" aren't showing up properly—particularly in the **top spot** or **video archive listing**.

---

### ✅ **What We Know / Observed**

1. **Event videos exist** in the database.
2. The **archive page loads** when you go directly to `/video-category/event-videos/` (or similar).
3. A **dummy video** was created but didn’t appear in the top spot—suggesting an issue in how videos are queried or rendered.
4. The CPT, taxonomy, and archive structure for videos looks fine.
5. The code excludes certain categories (`well-spots`, `guest-clips`, `featured-stories`) from some views.
6. The term **`event-videos`** doesn’t appear anywhere in the codebase.

---

### 🧠 **Hypothesis**

The `event-videos` category is simply not being recognized or excluded/included properly because it’s **not accounted for explicitly** in the filtering logic (e.g., `WP_Query`, `tax_query`, or exclusions).

---

### 🔍 Key Areas to Investigate

#### ✅ 1. **Check WP_Query in `arch-vids.php`**

Look for a `tax_query` that might be filtering for or excluding categories. If it's like:

```php
'tax_query' => [
  [
    'taxonomy' => 'video-category',
    'field'    => 'slug',
    'terms'    => ['well-spots', 'guest-clips', 'featured-stories'],
    'operator' => 'NOT IN',
  ],
],
```

This means **only** those 3 are being excluded—but `event-videos` isn't even acknowledged.

👉 **Action**: Try **removing the `tax_query` temporarily** or ensuring that `event-videos` is not being implicitly excluded somewhere else.

---

#### ✅ 2. **Check if ACF or Custom Logic Is Hiding "event-videos"**

You mentioned:

> "#POSSIBLE: ACF settings preventing videos from having archive / being public in certain contexts?"

If there's a **custom field like `hide_from_top`**, it might be causing issues.

👉 **Action**:

* Inspect ACF field groups for any `true/false` or conditional logic fields on the Video CPT.
* Look at the logic in **`elsm_get_today_vid_id()`** or wherever the featured video is determined. Ensure `meta_query` or other filters aren’t omitting event videos.

---

#### ✅ 3. **Check the `elsm_get_today_vid_id()` Function**

You wrote:

> "elsm_get_today_vid_id() is not excluding event videos"

This is a clue. If that function is responsible for selecting a daily or top video, it might be hardcoded or filtering incorrectly.

👉 **Action**: Ensure that the function:

* Doesn't skip `event-videos` unintentionally.
* Isn't relying on only certain categories or using `tax_query` that omits them.

---

#### ✅ 4. **Test With Another Category**

> "#POSSIBLE: What if I try other categories on the dummy post"

Great idea!

👉 **Action**: Change the dummy post to a **non-excluded category** (like one already showing up correctly).

* If it **then appears in the top spot**, you can confirm the issue is **tax_query-based filtering**.

---

#### ✅ 5. **Check for Misspelled or Nonexistent Slug**

Since `event-videos` isn't found in codebase search:

👉 **Action**:

* **Confirm the exact slug** used in WordPress Admin under **Videos > Categories**.
* Maybe it’s `events`, `eventvideo`, etc., and not `event-videos`.

---

### 🧰 Optional Debug Tip

Add this into your `arch-vids.php` or wherever the query is made:

```php
echo '<pre>'; print_r($query->request); echo '</pre>';
```

It will show you the **raw SQL query** being run by WP_Query—very helpful for checking what’s actually being queried or filtered.

---

### ✅ Summary of Action Items

| Task                                   | Purpose                                  |
| -------------------------------------- | ---------------------------------------- |
| ✅ Check `tax_query` in `arch-vids.php` | See if `event-videos` is being excluded  |
| ✅ Confirm slug `event-videos` exists   | Prevent mismatches                       |
| ✅ Check `elsm_get_today_vid_id()`      | Make sure it's not skipping event videos |
| ✅ Inspect ACF for hide/exclude fields  | Identify post visibility logic           |
| ✅ Test dummy video in another category | Confirm category is the issue            |
| ✅ Dump SQL of query                    | See exactly what’s being filtered        |

---

If you want, I can help you **refactor the query** with conditional logic that only excludes specific categories (and ensures `event-videos` shows), or even **rewrite `elsm_get_today_vid_id()`** defensively.

Let me know where you want to dig in next.
