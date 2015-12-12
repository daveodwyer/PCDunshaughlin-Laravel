<?php

class PagesTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('pages')->delete();
        
		\DB::table('pages')->insert(array (
			0 => 
			array (
				'id' => 1,
				'title' => 'PCDunshaughlin',
				'content' => '<p>At PCDunshaughlin we offer a No Fix - No Fee service for your IT needs. With over <strong>8&nbsp;years experience</strong> you are sure to be in safe hands! Click below to see the services we offer.</p>',
				'view' => 'public.index',
				'slug' => 'home',
				'nav_order' => 1,
				'show_in_nav' => 'yes',
				'meta_keywords' => NULL,
				'meta_description' => NULL,
				'created_at' => '2014-12-01 00:47:33',
				'updated_at' => '2014-12-01 00:47:33',
			),
			1 => 
			array (
				'id' => 3,
				'title' => 'Contact',
				'content' => '<p>test</p>',
				'view' => 'public.contact',
				'slug' => 'contact',
				'nav_order' => 10,
				'show_in_nav' => 'yes',
				'meta_keywords' => NULL,
				'meta_description' => NULL,
				'created_at' => '2014-11-23 21:41:31',
				'updated_at' => '2014-11-30 15:32:55',
			),
			2 => 
			array (
				'id' => 4,
				'title' => 'About',
				'content' => '<p>PCDunshaughlin was originally set up to aid the local community with common IT problems without the expensive cost. Since then we have seen many happy clients who in return have spread the word about our services to local neighbours and communities. We aim to please and thank all for their custom. <a href="../../../contact">Contact us</a> for more details.</p>',
				'view' => 'public.generic',
				'slug' => 'about',
				'nav_order' => 6,
				'show_in_nav' => 'yes',
				'meta_keywords' => NULL,
				'meta_description' => NULL,
				'created_at' => '2014-11-23 22:10:45',
				'updated_at' => '2015-01-28 19:52:33',
			),
			3 => 
			array (
				'id' => 5,
				'title' => 'Services and Prices',
				'content' => '<table id="prices_table" class="footable">
<thead>
<tr><th id="prices_table_service">Service</th><th class="hide_phone">Desc</th><th id="prices_table_cost">Cost</th></tr>
</thead>
<tbody>
<tr>
<td>Virus and Malware Removal</td>
<td class="hide_phone">We offer a professional virus and malware removal service. Unwanted programs (PUPs) spy on what we use our computer to do and could potentially put your computer data at risk.</td>
<td style="text-align: center;">&euro;40</td>
</tr>
<tr>
<td>Operating System Reinstall</td>
<td class="hide_phone">If your computer has gotten so slow that you just want to bring it back to its factory state - we offer a reinstall service for all Windows operating systems at a flat affordable fee.</td>
<td style="text-align: center;">&euro;50</td>
</tr>
<tr>
<td>Laptop Screen Repair</td>
<td class="hide_phone">Broken Laptop screen? No problem at all. We offer an affordable service on all laptop screen repair.</td>
<td style="text-align: center;">&euro;50 + Parts</td>
</tr>
<tr>
<td>Computer Diagnostic</td>
<td class="hide_phone">We diagnose both laptops and desktop computers free of charge.</td>
<td style="text-align: center;">FREE!</td>
</tr>
<tr>
<td>Laptop Keyboard Replacement</td>
<td class="hide_phone">If you need a laptop keyboard replacement, talk to us today and we can get you back typing in no time.</td>
<td style="text-align: center;">&euro;40 + parts</td>
</tr>
<tr>
<td>Slow Internet Connection Issues</td>
<td class="hide_phone">If your computer has a slow internet connection, we can investigate and fix the issue to get you back online as quick as possible.</td>
<td style="text-align: center;">&euro;30</td>
</tr>
<tr>
<td>Website Development and Hosting</td>
<td class="hide_phone">We can tailor make websites to suit your business and/or personal needs. We also offer optional hosting services to get your website up on the internet for everyone to see.</td>
<td style="text-align: center;">Call for more Information</td>
</tr>
</tbody>
</table>',
				'view' => 'public.generic',
				'slug' => 'services-and-prices',
				'nav_order' => 4,
				'show_in_nav' => 'yes',
				'meta_keywords' => NULL,
				'meta_description' => NULL,
				'created_at' => '2014-11-23 22:25:17',
				'updated_at' => '2015-01-28 01:11:34',
			),
			4 => 
			array (
				'id' => 6,
				'title' => 'Thank You!',
				'content' => '<p>Thanks for getting in touch! We will get back to you as soon as we can.</p>',
				'view' => 'public.generic',
				'slug' => 'contact_success',
				'nav_order' => NULL,
				'show_in_nav' => 'no',
				'meta_keywords' => NULL,
				'meta_description' => NULL,
				'created_at' => '2015-01-28 01:23:39',
				'updated_at' => '2015-01-28 01:23:39',
			),
		));
	}

}
