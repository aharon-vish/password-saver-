package com.example.aharon.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.LinearLayout;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        LinearLayout layout=(LinearLayout)findViewById(R.id.testi);
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

        EditText edttext= new EditText(this);
//        edttext.setLayoutParams(params);
//
        layout.addView(edttext);
    }
}
