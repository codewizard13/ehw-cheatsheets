### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/24/25


## CONTENT_BELOW: ##

---



PHP TIME CONSTANTS:  I've defined a some constant arrays like this:

```php
/*
  DATE / TIME
______________________________________________ */

define('DT', [
  'current_year' => date('Y'),
  'first_of_cur_yr' => date('F j, Y', strtotime(date('Y-01-01'))),
]);
```

```php
/*
  WELLS STATS
______________________________________________ */


$uganda = 633;
$other = 15;
$total = $uganda + $other;
$ppl_impacted = 350 * $total;

define('WELLS_STATS', [
  'uganda' => $uganda,
  'other' => $other,
  'total' => $total,
  'ppl_impacted' => number_format($ppl_impacted, 0, '.', ','),
  'countries_ct' => 12,
  'date_updated' => 'September 2025',
  'faq_since_date' => 'FEB 1, 2025',
]);
```

Then I'm doing a ternary to see display first_of_cur_yr if it exists, otherwise default to faq_since_date, but it is not working. When I changed the faq_since_date to 'FEB ...' the ternary immediately changed to that date, although the first_of_cur_yr clearly exists  - what am i doing wrong?

Ternary:

```php
// Date for the first of the current year
$well_faq_since_date = defined(DT['first_of_cur_yr']) ? DT['first_of_cur_yr'] : WELLS_STATS['faq_since_date']; 
```